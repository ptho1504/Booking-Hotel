import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173";
test("should allow user to sign in", async ({ page }) => {
  await page.goto(UI_URL);

  // get the sign-in button
  await page.getByRole("link", { name: "Sign In" }).click();

  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  await page.locator("[name=email]").fill("1111@gmail.com");
  await page.locator("[name=password]").fill("1111");

  await page.getByRole("button", { name: "Log in" }).click();

  await expect(page.getByText("Login successfully")).toBeVisible();
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign out" })).toBeVisible();
});

test("should allow user to register", async ({ page }) => {
  const testEmail = `test_register_${Math.floor(Math.random()*123456) + 10000}@test.com`
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Sign In" }).click();
  await page.getByRole("link", { name: "Create an account here" }).click();
  await expect(
    page.getByRole("heading", { name: "Create an Account" })
  ).toBeVisible();

  await page.locator("[name=firstName]").fill("text_firstName")
  await page.locator("[name=lastName]").fill("text_lastName")
  await page.locator("[name=email]").fill(testEmail)
  await page.locator("[name=password]").fill("1111")
  await page.locator("[name=confirmPassword]").fill("1111")

  await page.getByRole("button",{name: "Create account"}).click()

  await expect(page.getByText("Registration successful")).toBeVisible();
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign out" })).toBeVisible();
  
});
