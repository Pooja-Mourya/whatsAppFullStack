import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

public class Test{
    public static void main(String[] args){
        List<String> str = new LinkedList<String>();
        str.add("puja");
        str.add("priya");
        str.add("puja");
        System.out.println(str);

        
        Iterator<String> itr = str.iterator() ;
            while(itr.hasNext()){
                System.out.println(itr.next());
            }

        };
    }
