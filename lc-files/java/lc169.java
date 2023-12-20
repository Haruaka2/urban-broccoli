import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class lc169 {
    public static int majorityEle(int[] nums) {
        HashMap<Integer, Integer> ids = new HashMap<Integer, Integer>();
        for(int i = 0; i < nums.length; i++) {
            if(ids.containsKey(nums[i])) {
                ids.compute(nums[i], (key, val) -> (val == null)
                    ? 1 : val + 1);
                ids.put(nums[i], ids.get(nums[i]) + 1);
            } else {
                ids.put(nums[i], 1);
            }
        }

        return Collections.max(ids.entrySet(), Map.Entry.comparingByValue()).getKey();
    }
}
