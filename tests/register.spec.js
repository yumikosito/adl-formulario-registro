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

    test("Registro Fallido por Falta de Datos Obligatorios", async ({ page }) => {
      await page.goto('/')
      await page.fill('#name', 'Juan Perez');
      await page.fill('#email', 'juan.perez@example.com');
      await page.fill('#password', 'ClaveSegura123');
      await page.fill('#confirmPassword', '');
      await page.getByRole('button', { name: 'Registrarse' }).click();
      await expect(page.locator('p')).toContainText('La confirmación de clave es obligatoria.')

      const message = await page.getByText('Por favor, corrige los errores en el formulario.')
      await expect(message).toBeVisible()
    });

    test("Registro Fallido por Clave y Confirmación de Clave No Coinciden", async ({ page }) => {
      await page.goto('/')
      await page.fill('#name', 'Juan Perez');
      await page.fill('#email', 'juan.perez@example.com');
      await page.fill('#password', 'ClaveSegura123');
      await page.fill('#confirmPassword', 'ClaveSegura122');
      await page.getByRole('button', { name: 'Registrarse' }).click();
      await expect(page.locator('p')).toContainText('La clave y la confirmación de clave no coinciden.')

      const message = await page.getByText('Por favor, corrige los errores en el formulario.')
      await expect(message).toBeVisible()
    });
    test("Registro Fallido por Clave No Cumple las Reglas", async ({ page }) => {
      await page.goto('/')
      await page.fill('#name', 'Juan Perez');
      await page.fill('#email', 'juan.perez@example.com');
      await page.fill('#password', 'ClaveSegura');
      await page.fill('#confirmPassword', 'ClaveSegura');
      await page.getByRole('button', { name: 'Registrarse' }).click();
      await expect(page.locator('p')).toContainText('La clave debe tener al menos 10 caracteres, incluyendo mayúsculas, minúsculas y números.')

      const message = await page.getByText('Por favor, corrige los errores en el formulario.')
      await expect(message).toBeVisible()
    })

    test("Registro Fallido por Clave No Cumple las Reglas (Solo números)", async ({ page }) => {
      await page.goto('/')
      await page.fill('#name', 'Juan Perez');
      await page.fill('#email', 'juan.perez@example.com');
      await page.fill('#password', '123123123123');
      await page.fill('#confirmPassword', '123123123123');
      await page.getByRole('button', { name: 'Registrarse' }).click();
      await expect(page.locator('p')).toContainText('La clave debe tener al menos 10 caracteres, incluyendo mayúsculas, minúsculas y números.')

      const message = await page.getByText('Por favor, corrige los errores en el formulario.')
      await expect(message).toBeVisible()
    })

});
