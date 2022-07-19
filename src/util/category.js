import NameUtil from "./nameUtil"
import ErrorUtil from "./errorUtil"

// Item category 종류
// V: Vegetable
// M: Meat
// D: Drink

class Category extends NameUtil {
    constructor(category) {
        super("Category")
        ErrorUtil.invalidParameter(category)
        this.category = category

        NameUtil.freezeObject(this, Category)
    }
}

Category.V = new Category("vegatable")
Category.M = new Category("meat")
Category.D = new Category("Drink")

export default Category
