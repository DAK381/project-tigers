import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

const Text = ({setData, fieldName,initialContent}) => {
  const editorRef = useRef(null);
  const log = (e) => {
    e.preventDefault();
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleOnChange = () => {

    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setData((prevState) => {
        return {
            ...prevState,
            [fieldName]: editorRef.current.getContent(),
          };
      })
    }
  };

  return (
    <div>
      <Editor
        apiKey="i559hgpg42jgvcjfx8qhkyguimjl5v41b372htj1aatkzrsw"
        onInit={(evt, editor) => (editorRef.current = editor)}
        value={initialContent}
        onEditorChange={handleOnChange}
        init={{
          height: 300,
          menubar: false,
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </div>
  );
};

export default Text;