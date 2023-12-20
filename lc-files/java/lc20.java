import java.util.ArrayList;

public class lc20 {
    public static boolean isValidParenthesis(String str) {
        if(str.length() == 0) return true;
        else if(str.length() == 1) return false;
        else {
            ArrayList<String> tempStack = new ArrayList<>();
            int count = 0;

            while(count < str.length()) {
                String currentChar =  String.valueOf(str.charAt(count));
                if(currentChar == "(") {
                    tempStack.add(")");
                } else if (currentChar == "{") {
                    tempStack.add("}");
                } else if (currentChar == "[") {
                    tempStack.add("]");
                } else {
                    String popped = tempStack.get(count - 1);
                    if(popped != String.valueOf(str.charAt(count)))
                        return false;
                }
                count++;
            }

            return !(tempStack.size() > 0);
        }
    }
}
