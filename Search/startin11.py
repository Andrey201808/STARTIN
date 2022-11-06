from bs4 import BeautifulSoup
import urllib.request
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import csv
from openpyxl import Workbook
from pandas import ExcelWriter

print('StartIn')
html_page = urllib.request.urlopen("https://i.moscow/tech_contests")
soup = BeautifulSoup(html_page, "html.parser")
wb = Workbook()
ws = wb.create_sheet('Startin')
row1 = 'Text';
  
for link in soup.findAll('a'):
    print(link.get('href'))
row = [link.text,link.text]
df = pd.DataFrame(soup)
writer = ExcelWriter(f'startin_output.xlsx')
df.to_excel(writer, 'Лист1')
writer.save()
  
  
var = pd.read_excel("startin_output1.xlsx")
print(var)
x = list(var['Text'])
y = list(var['Index'])
plt.figure(figsize=(10,10))
plt.style.use('seaborn-v0_8')
plt.scatter(x,y,marker="*",s=100,edgecolors="black",c="yellow")
plt.title("График")
fig, ax = plt.subplots(2, figsize=(10, 6))
ax[0].scatter(x = var['Text'], y = var['Index'])
fig, ax = plt.subplots(2, figsize=(10, 6))
sns.pairplot(var, diag_kind='kde', plot_kws={'alpha': 0.2})
sns.pairplot(var, diag_kind='kde', plot_kws={'alpha': 0.2},hue='Index', palette='hls')
plt.show()





