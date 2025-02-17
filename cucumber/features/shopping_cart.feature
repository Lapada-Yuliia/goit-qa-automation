Feature: Shopping cart
    Scenario: Calculate total cost
        Given the following products are added to the shopping cart:
            | Product   | Price |
            | Laptop    | 1000  |`
            | Headphones| 100   |
            | Mouse     | 20    |
        When I calculate the total cost
        Then the total cost should be 1120