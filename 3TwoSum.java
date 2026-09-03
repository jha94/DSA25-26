import java.util.HashMap;
import java.util.Arrays;

class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int index = 0; index < nums.length; index++) {
            int diff = target - nums[index];
            if (map.containsKey(diff)) {
                return new int[] { map.get(diff), index };
            } else {
                map.put(nums[index], index);
            }
        }
        return new int[] { -1, -1 };
    }

    public static void main(String[] args) {
        TwoSum twoSum = new TwoSum();
        int[] nums = { 3, 4, 5, 6 };
        int[] res = twoSum.twoSum(nums, 7);
        System.out.println("hello hello hello");
        System.out.println(Arrays.toString(res));
    }
}
