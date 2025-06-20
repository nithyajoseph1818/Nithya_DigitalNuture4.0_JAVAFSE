import java.text.DecimalFormat;

public class FinancialForecast {

    public static double calculateFutureValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return (1 + growthRate) * calculateFutureValue(presentValue, growthRate, years - 1);
    }

    public static void main(String[] args) {
        double presentValue = 10000;
        double growthRate = 0.05;
        int years = 5;

        double futureValue = calculateFutureValue(presentValue, growthRate, years);

        DecimalFormat df = new DecimalFormat("#.##");
        System.out.println("Future Value after " + years + " years: Rs. " + df.format(futureValue));
    }
}
