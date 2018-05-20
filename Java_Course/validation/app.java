import java.util.*;

class app {
	public static void main(String[] args) {
		HashMap<String, String> data = new HashMap<String, String>();
		data.put("Sharan", "Abs");
		data.put("Sajiv", "Complex");
		data.put("Anu", "Conje");
		System.out.println("Type in your username: ");
		Scanner user = new Scanner(System.in);
		String username = user.nextLine();
		if (data.get(username) == null) {
			System.out.println("Invalid username");
		} else {
			System.out.println("Type in your password: ");
			Scanner pass = new Scanner(System.in);
			String password = pass.nextLine();
			if (password.equals(data.get(username))) {
				System.out.println("Login Successful");
			} else {
				System.out.println("Invalid Password");
			}

		}
	}
}
