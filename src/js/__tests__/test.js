import heroHealth from "../app";

test.each([
    [{ name: 'Маг', health: 90 }, 'healthy'],
    [{ name: 'Лучник', health: 50 }, 'wounded'],
    [{ name: 'Варвар', health: 20 }, 'wounded'],
    [{ name: 'Чародейка', health: 10 }, 'critical'],
])('testing health for %p', (name, health, expected) => {
    const value = heroHealth({name, health});
    expect(value).toBe(expected);
})