public class animal {
    public animal() {
        System.out.println("Animal Class");
    }
    public void getStatus(int code) {
        if (code == 0) {
            System.out.println("Animal is fine");
        }else{
            System.out.println("Animal needs food");
        }
    }
    public static void main(String[] args) {
        System.out.println("Animal Class");
    }
}