import java.util.ArrayList;

public class lc4 {
  public static int medianOfSortedArr(int[] arr1, int[] arr2) {
    int arr1Pointer = 0;
    int arr2Pointer = 0;
    ArrayList<Integer> comboArr = new ArrayList<>();

    while(arr1Pointer < arr1.length || arr2Pointer < arr2.length) {
        if(arr1Pointer == arr1.length) {
            comboArr.add(arr2[arr2Pointer]);
            arr2Pointer++;
        } else if (arr2Pointer == arr2.length) {
            comboArr.add(arr1[arr1Pointer]);
            arr1Pointer++;
        } else {
            int arr1Val = arr1[arr1Pointer];
            int arr2Val = arr1[arr2Pointer];

            if(arr1Val > arr2Val) {
                comboArr.add(arr2Val);
                arr2Pointer++;
            } else if(arr1Val < arr2Val) {
                comboArr.add(arr1Val);
                arr1Pointer++;
            } else {
                comboArr.add(arr1Val);
                comboArr.add(arr2Val);
                arr1Pointer++;
                arr2Pointer++;
            }
        }
    }

    int medIndx = comboArr.size() / 2;
    return comboArr.size() % 2 == 0 ?
        (comboArr.get(medIndx) + comboArr.get(medIndx - 1)) / 2
        : comboArr.get(medIndx);
  }
}
