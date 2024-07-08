// EX
import pandas as pd
from PIL import Image

file_name = 'DETAIL2.xlsx'
df = pd.read_excel(file_name, sheet_name=None)

distinguished_data = set()

for detail in df['Sheet1']['DETAIL']:
    for char in detail:
        distinguished_data.add(char)

d_data = sorted(distinguished_data)

colors = [
    (255, 255, 255),
    (0, 0, 0),
    (255, 0, 0),
    (0, 255, 0),
    (0, 0, 255),
    (255, 255, 0),
    (255, 0, 255),
    (0, 255, 255),
    (128, 128, 128),
    (128, 0, 0),
    (0, 128, 0),
    (0, 0, 128),
    (128, 128, 0),
    (128, 0, 128),
    (0, 128, 128),
]

while len(colors) < len(d_data):
    colors.extend(colors)

color_mapping = {}
index = 0

for char_data in d_data:
    color_mapping[char_data] = colors[index]
    index += 1

wafer_images = {}
wafer_groups = df['Sheet1'].groupby('WAFER_NO')

for wafer_no, wafer_data in wafer_groups:
    details = wafer_data['DETAIL'].tolist()
    height = len(details)
    width = len(details[0])
    image = Image.new('RGB', (width, height))
    
    pixels = []
    for row_no in details:
        row_pixels = []
        for detail_data in row_no:
            row_pixels.append(color_mapping[detail_data])
        pixels.extend(row_pixels)
    
    image.putdata(pixels)
    wafer_images[wafer_no] = image

sample_image = next(iter(wafer_images.values()))
wafer_width, wafer_height = sample_image.size

canvas_width = wafer_width * 5
canvas_height = wafer_height * 5
canvas = Image.new('RGB', (canvas_width, canvas_height))

for wafer_no, image in wafer_images.items():
    x = ((wafer_no - 1) % 5) * wafer_width
    y = ((wafer_no - 1) // 5) * wafer_height
    canvas.paste(image, (x, y))

canvas.show()
