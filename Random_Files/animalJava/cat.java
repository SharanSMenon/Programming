class cat extends animal{
    int age;
    public cat(int ag){
        age = ag;
        System.out.println("Cat Class");
    }    
    public void meow() {
        System.out.println("Meow");
    }
    public int getAge() {
        return age;
    }
    public static void main(String[] args) {
    }    
}