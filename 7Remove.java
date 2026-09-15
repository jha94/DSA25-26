import java.util.Arrays;

class Remove{
    public static void main(String[] args) {
        Integer[] nums = {0,1,2,2,3,0,4,2};
        int val = 2;
        Integer[] res = Arrays.stream(nums).filter(num->num!=val).toArray(Integer[]::new);
        System.out.println(Arrays.toString(res));
    }
}