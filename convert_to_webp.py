import os
from PIL import Image

# Directory containing your images
dirs = [
    'public',
    'public/skills',
    'public/icons'
]

image_exts = ['.png', '.jpg', '.jpeg', '.gif']

for dir_path in dirs:
    if not os.path.exists(dir_path):
        continue
    for fname in os.listdir(dir_path):
        fpath = os.path.join(dir_path, fname)
        if not os.path.isfile(fpath):
            continue
        ext = os.path.splitext(fname)[1].lower()
        if ext in image_exts:
            try:
                im = Image.open(fpath)
                webp_path = os.path.splitext(fpath)[0] + '.webp'
                im.save(webp_path, 'webp', quality=85)
                print(f'Converted {fpath} -> {webp_path}')
            except Exception as e:
                print(f'Failed to convert {fpath}: {e}')
