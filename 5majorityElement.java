import java.util.HashMap;

class MajorityElement {
    public int majorityElement(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int index = 0; index < nums.length; index++) {
            map.put(nums[index], map.getOrDefault(nums[index], 0) + 1);
        }
        int res = -1;
        for (int num : map.keySet()) {
            if (map.get(num) > nums.length / 2) {
                res = num;
                break;
            }
        }
        return res;
    }

    public static void main(String[] args) {
        MajorityElement me = new MajorityElement();
        int[] nums = { 5, 5, 1, 1, 1, 5, 5 };
        System.out.println(me.majorityElement(nums));
    }
}