package logger;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        logger.error("ERROR MESSAGE");
        logger.warn(" WARNING MESSAGE");
    }
}
