public class TwoSum {
  public static int solve(int[] list, int tar){
    //[1, 2, 3, 4, 5, 6, 7, 9] tar = 8; expected value 3
    int count = 0;

    for (int i = 0; i < list.length; i++){
      for(int j = i + 1; j < list.length; j++){
        if(list[i] + list[j] == tar){
          count++;
        }
      }
    }
    return count;
  }

  public static int solve2(int[] list, int tar){
    int count = 0;
    Set<Integer> set = new HashSet<Integer>();
    for(int i = 0; i < list.length; i++){
      set.add(list[i]);
    }

    for(int i = 0; i < list.length; i++){
      if(set.contains(tar - list[i])){
        count++;
      }
    }
    //runtime: O(n)
    //space complexity: O(n)
    return count;
  }

  public static int solve3(int[] list, int tar){
    int l = 0;
    int r = list.length - 1;
    int count = 0;
    while(l < r){
      if(list[l] + list[r] > tar){
        r--;
      } else if(list[l] + list[r] < tar){
        l++;
      } else {
        count++;
        r--;
        l++;
      }
    }
    return count;
  //runtime: O(n)
  //space complexity: O(1)
  }

}