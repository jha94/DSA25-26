class ArrayConcate {
    public int[] getConcatenation(int[] nums) {
        int[] result = new int[2 * nums.length];
        System.arraycopy(nums, 0, result, 0, nums.length);
        System.arraycopy(nums, 0, result, nums.length, nums.length);
        return result;
    }
}
