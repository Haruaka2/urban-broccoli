import java.util.Arrays;

public class lc58 {
    public static int lenOfLastWord(String str) {
        String[] arr = str.replaceAll(" ", "").split(" ");
        arr = Arrays.stream(arr).filter(x -> x.length() > 0).toArray(String[]::new);
        return arr[arr.length - 1].length();
    }
}
