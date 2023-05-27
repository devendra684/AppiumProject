package Demo.appiumFramework;
import java.io.FileReader;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.URL;
import java.util.Properties;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.AutomationName;
import io.appium.java_client.remote.MobileCapabilityType;
import io.appium.java_client.service.local.AppiumDriverLocalService;
public class Capability_Ride {
	public static String deviceName;
	public static String platformName;
	public static String appPackage;
	public static String appActivity;
	public static String chromeDriver;
	public static Process rt;
	public static AppiumDriverLocalService service;
	//i am trying start my appium by default in my console window
//	public static boolean checkifserverisRunning(int port)
//	{
//		boolean isServerRunning=false;
//		ServerSocket serversocket;
//		try{
//			serversocket = new ServerSocket(port);
//			serversocket.close();
//		}
//		catch(IOException e)
//		{
//			isServerRunning = true;
//		}
//		finally {
//			serversocket=null;
//		}
//		return isServerRunning;
//	}
public AppiumDriverLocalService startserver()
	{
boolean flag = checkifserverisRunning(4723);
if(!flag)
{
		service = AppiumDriverLocalService.buildDefaultService();
}
		return service;
		
	}
public static boolean checkifserverisRunning(int port)
{
	boolean isServerRunning=false;
	ServerSocket serversocket;
	try{
		serversocket = new ServerSocket(port);
		serversocket.close();
	}
	catch(IOException e)
	{
		isServerRunning = true;
	}
	finally {
		serversocket=null;
	}
	return isServerRunning;
}
	public static AppiumDriverLocalService startAppium() {
	service= AppiumDriverLocalService.buildDefaultService();
	return service;
	}
	
	//public static void startEmulator() throws IOException, InterruptedException {
// rt = Runtime.getRuntime().exec("C:\\Users\\user\\OneDrive\\Desktop\\emulator.bat");
// Thread.sleep(10000);
//	}
	
	public static AndroidDriver<AndroidElement> hybridCapability() throws IOException, InterruptedException {
 //startEmulator();
 FileReader fReader = new FileReader(System.getProperty("user.dir")+"\\src\\main\\java\\Global.properties");
 Properties ps = new Properties();
 ps.load(fReader);
 deviceName = ps.getProperty("devicename");
 platformName = ps.getProperty("platformname");
 appPackage = ps.getProperty("apppackage");
 appActivity = ps.getProperty("appactivity");
 chromeDriver = ps.getProperty("chromeexecutables");
 DesiredCapabilities dc = new DesiredCapabilities();
 dc.setCapability(MobileCapabilityType.DEVICE_NAME, deviceName);
 dc.setCapability(MobileCapabilityType.PLATFORM_NAME, platformName);
 dc.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, appPackage);
 dc.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY, appActivity);
dc.setCapability(MobileCapabilityType.AUTOMATION_NAME, AutomationName.ANDROID_UIAUTOMATOR2);
 dc.setCapability(MobileCapabilityType.NO_RESET, true);
 dc.setCapability(AndroidMobileCapabilityType.CHROMEDRIVER_EXECUTABLE, chromeDriver);
 AndroidDriver<AndroidElement> driver = new AndroidDriver<AndroidElement>(new URL("http://0.0.0.0:4723/wd/hub"),dc);
 //AndroidDriver<MobileElement> driver = new AndroidDriver<MobileElement>(new URL("http://0.0.0.0:4723/wd/hub"), dc);

 return driver;
	}
}