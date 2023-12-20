import java.util.ArrayList;
import java.util.List;

public class lc412 {
    public static List<String> fizzBuzzAgain (int target) {
        ArrayList<String> sample = new ArrayList<>();
        int count = 0;

        while(count < target) {
            if(count % 3 == 0) {
                if(count % 5 == 0) {
                    sample.add("FizzBuzz");
                } else {
                    sample.add("Fizz");
                }
            } else if(count % 5 == 0) {
                sample.add("Buzz");
            } else {
                sample.add(String.valueOf(count));
            }
        }

        return sample;
    }
}
