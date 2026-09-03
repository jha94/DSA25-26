import java.util.HashSet;

class Duplicate {
    public boolean hasDuplicate(int[] nums) {
        HashSet<Integer> hs = new HashSet<Integer>();
        for (int index = 0; index < nums.length; index++) {
            if (hs.contains(nums[index])) {
                return true;
            } else {
                hs.add(nums[index]);
            }
        }
        return false;
    }
}
