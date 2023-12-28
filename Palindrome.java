class Palindrome {
    public static void main(String[] args) {
    //     String str = "mlayalm";
    //     str = str.toLowerCase();
    //     char[] myString = new char[str.length()];
    //     boolean isPalindrome = true;
        
    //     for (int i = 0, j = myString.length - 1; i < j; i++, j--) {
    //         if (myString[i] != myString[j]) {
    //             isPalindrome = false;
    //             break;
    //         }
    //     }

    //     if (isPalindrome) {
    //         System.out.println("yes");
    //     } else {
    //         System.out.println("no");
    //     }
    // }

        // static String str = "pooja";
        // static String reverse = " ";
        // public static void main(String[] args) {
        //     for(int i = 0 ; i>str.length(); i++){
        //     reverse = reverse + str.charAt(i) ;
        //     }
        //     if(str.equals(reverse)){
        //         System.out.println("yes");
        //     }else{
        //         System.out.println("no");
        //     }
      
  // contagious

  int[] arr = {4 ,-6 ,2 ,5};

  int sum = 0;
  for (int i = 0; i < arr.length; i++) {
    sum += arr[i];
    
  }

  System.out.println(sum);
}
}