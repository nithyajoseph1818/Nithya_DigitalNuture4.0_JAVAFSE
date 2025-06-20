import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
}

public class EcommerceSearch {

    public static int linearSearch(Product[] products, String targetName) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(targetName)) {
                return i;
            }
        }
        return -1;
    }

    public static int binarySearch(Product[] products, String targetName) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int comparison = targetName.compareToIgnoreCase(products[mid].productName);

            if (comparison == 0) {
                return mid;
            } else if (comparison < 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Cupcake", "Dessert"),
            new Product(2, "Burger", "Fast Food"),
            new Product(3, "Pizza", "Fast Food"),
            new Product(4, "Donut", "Dessert"),
            new Product(5, "Sandwich", "Snack")
        };

        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        String searchItem = "Cupcake";

        int linearResult = linearSearch(products, searchItem);
        if (linearResult != -1) {
            System.out.println("Linear Search: Product '" + searchItem + "' found at index " + linearResult);
        } else {
            System.out.println("Linear Search: Product '" + searchItem + "' not found.");
        }

        int binaryResult = binarySearch(products, searchItem);
        if (binaryResult != -1) {
            System.out.println("Binary Search: Product '" + searchItem + "' found at index " + binaryResult);
        } else {
            System.out.println("Binary Search: Product '" + searchItem + "' not found.");
        }
    }
}
