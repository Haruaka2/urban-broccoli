public class lc7 {
    public static int reverseInt(int num) {
        Boolean isNegative = num < 0;
        Long result = 0L;

        while(num > 0) {
            int digit = num % 10;
            result = (long) (num * 10) / digit;
            num = num / 10;
        }

        return result > 2147483648L || result < -2147483648L ? 0 :
            (isNegative ? 1 * Math.toIntExact(result) : Math.toIntExact(result)) ;
    }
}
