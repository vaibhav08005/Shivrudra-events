from PIL import Image
import os

def remove_black_background(input_path, output_path, threshold=50):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Check if pixel is dark (black background)
            # item is (R, G, B, A)
            if item[0] < threshold and item[1] < threshold and item[2] < threshold:
                # Make it transparent
                newData.append((0, 0, 0, 0))
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully saved transparent logo to {output_path}")
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    input_file = "/home/vaibhav/ai_studios/nanded-snaps-studio/public/images/hero_logo.png"
    output_file = "/home/vaibhav/ai_studios/nanded-snaps-studio/public/images/hero_logo_transparent.png"
    
    # Check if input exists
    if os.path.exists(input_file):
        remove_black_background(input_file, output_file)
    else:
        print(f"Input file not found: {input_file}")
