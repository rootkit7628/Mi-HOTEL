
import os
import sys

print("✅ Fixing PropTypes issues")
dir_path = os.path.dirname(os.path.realpath(__file__))
rnw_filename = dir_path + "/node_modules/react-native-web/dist/index.js"

def append_new_line(file_name, text_to_append):
    """Append given text as a new line at the end of file"""
    
    if text_to_append in open(file_name).read():
        print("⏭️  Skipping...")
    else:
        with open(file_name, "a+") as file_object:        
            file_object.write("\n")
            file_object.write(text_to_append)
            file_object.close()

# Fix 
append_new_line(rnw_filename, "export const ViewPropTypes = { style: null };")
