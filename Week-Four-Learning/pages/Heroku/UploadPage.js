import { expect } from '@playwright/test';

export class UploadPage {
  constructor(page) {
    this.page = page;
    this.chooseFile = page.locator('//input[id="file-upload"]');
    this.Uploadbtn = page.locator('//button[@value="Upload"]');
    this.resultHeader = page.getByRole('heading', {name: 'File Uploaded!'});
  }
  
    async goto(){
    await this.page.goto('https://the-internet.herokuapp.com/upload');
  }

    async upload(filePath){
    await this.chooseFile.setInputFiles(filePath); //test-data/files/sample.txt
    await this.Uploadbtn.click();
    }

    async expectUploaded(filename){
    await expect(this.resultHeader).toBeVisible();
    await expect(this.uploadedFiles).toHaveText(filename);
    }
}