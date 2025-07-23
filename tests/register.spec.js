import { test, expect } from '@playwright/test';

test.describe("Pruebas de registro", () => {
    test("Registro con datos válidos", async ({ page }) => {
      await page.goto('/')
      await page.fill('#name', 'Juan Perez');
      await page.fill('#email', 'juan.perez@example.com');
      await page.fill('#password', 'ClaveSegura123');
      await page.fill('#confirmPassword', 'ClaveSegura123');
      await page.getByRole('button', { name: 'Registrarse' }).click();
      const message = await page.getByText('¡Registro exitoso! Datos enviados correctamente.')
      await expect(message).toBeVisible()
      await expect(page.locator('#name')).toHaveValue('')
      await expect(page.locator('#email')).toHaveValue('')
      await expect(page.locator('#password')).toHaveValue('')
      await expect(page.locator('#confirmPassword')).toHaveValue('')
    });
});