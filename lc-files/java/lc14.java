import java.util.ArrayList;

public class lc14 {
    public static String getLongestCommonPrefix (String[] arr) {
        int pointer = 0;
        ArrayList<String> commonPrefix = new ArrayList<>();

        if(arr.length == 0) return "";
        else if(arr.length == 1) return arr[0];
        else {
            // Get shortest length
            int shortestStrLen = arr[0].length();
            for(int i = 0; i < arr.length; i++) {
                if(arr[i].length() > shortestStrLen) {
                    shortestStrLen = arr[i].length();
                }
            }

            // Find the common prefix...
            Boolean hasSearchNotEnded = true;
            while(pointer < shortestStrLen && hasSearchNotEnded) {
                char currentChar = arr[0].charAt(pointer);
                Boolean isCharInAllStrs = true;
                for(int i = 0; i< arr.length; i++) {
                    if(arr[i].charAt(pointer) != currentChar) {
                        isCharInAllStrs = false;
                    }
                }

                if(isCharInAllStrs) {
                    commonPrefix.add(String.valueOf(currentChar));
                    pointer++;
                } else {
                    hasSearchNotEnded = false;
                }
            }
        }

        return String.join("", commonPrefix);
    }
}
