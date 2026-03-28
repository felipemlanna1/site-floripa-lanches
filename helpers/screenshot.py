#!/usr/bin/env python3
"""Take a full-page screenshot of a URL using Playwright."""
import sys
import os
from playwright.sync_api import sync_playwright

def main():
    if len(sys.argv) < 3:
        print("Usage: screenshot.py <url> <output_dir>")
        sys.exit(1)

    url = sys.argv[1]
    output_dir = sys.argv[2]
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, "screenshot.png")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.goto(url, wait_until="networkidle")
        page.wait_for_timeout(2000)
        page.screenshot(path=output_path, full_page=False)
        browser.close()

    print(f"Screenshot saved to {output_path}")

if __name__ == "__main__":
    main()
