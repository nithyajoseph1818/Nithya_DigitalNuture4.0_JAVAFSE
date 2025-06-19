
public class SingletonExample
{
    static class Logger {

    private static Logger instance;

    private  Logger()
    {
        System.out.println("Logger Initialization");
    }
     public static Logger getInstance()
     {
if (instance==null)
{
    instance = new Logger();

}
return instance;
     }
public void Log(String message)
{
    System.out.println("LOG : "+message);
}
}
public static void main(String[] args) {

 
    Logger logger1 = Logger.getInstance();
    Logger logger2 = Logger.getInstance();

    logger1.Log("First message");
    logger2.Log("Second message");

    if (logger1 == logger2) 
    {
        System.out.println("Both logger instances are the same. Singleton works!");
    } 
    else
    {
        System.out.println("Different logger instances. Singleton failed.");
    }
}
}
