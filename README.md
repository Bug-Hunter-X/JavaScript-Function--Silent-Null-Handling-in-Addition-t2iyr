# JavaScript Function: Silent Null Handling in Addition

This repository demonstrates a potential bug in a simple JavaScript addition function. The function silently returns 0 when null values are passed as arguments. This behavior might be unexpected and lead to hidden errors in larger applications.

## Bug Description
The `foo` function adds two numbers. However, if either input is `null`, it returns 0 without explicitly indicating an error. This silent failure can make debugging difficult.

## Solution
The improved version explicitly checks for `null` values and either throws an error or provides a more informative return value (e.g., `NaN`).
