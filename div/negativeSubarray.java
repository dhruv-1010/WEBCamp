//package area
package div;
import java.util.Scanner;

// day 3 prblems cant code my logic anymore i need serious coding habits 
// logic building is kinda good still i am able to figure out the required logic behind the code but not able to code it

public class negativeSubarray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int[] ar = new int[x];
        int sum = 0;
        for(int i = 0;i<x;i++) {
            ar[i] = sc.nextInt();
            sum = Math.abs(ar[i])+sum;
        }
        int cnt = 0;
        int ei =0,si=0;
        // question needs to find number of negtive subarrays nothing else and i am fuckinng it here only also its not the 
        // best optimised solutions dude i seriously need to work hard now lets code 
        // oky lets solve this question first DSA is needed in this dont worry just work
        // [-4 0 3 0 -5 -6 -7 6] --> 2
        while(ei<x){
            int incnt=0;
            while(si<x && ar[si]<=0){
                if(incnt==0)incnt++;
                si++;
            }
            cnt+=incnt;
            ei=si;
        }
        System.out.println(sum + " " + cnt);
        sc.close();
    }
}