<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const file = ref<File | null>(null)
    const fileInput = ref<HTMLInputElement | null>(null)

    //OnUpload Function
    function onUpload() {
      const uploadedFile = fileInput.value?.files?.[0]
      
      //Alert if no files were chosen
      if (!uploadedFile) {
        alert("No File Selected")
        return
      }

      console.log("file uploaded",uploadedFile)
      
      file.value = uploadedFile
    }

    //Upload Click Function
    async function uploadFile() {
      
      //Checks for file on button click if there is no file send alot
      if (!file.value) {
        alert('No file selected')
        return
      }

      try {

        const formData = new FormData()
        formData.append('file', file.value, "../../assets/cvs/" + file.value.name)

        //Upload Alert
        alert("File Uploaded")

        file.value = null
        //Reset the file back to nothing when upload sucessful
        if (fileInput.value) {
        fileInput.value.value = ''
        }
      } catch (e) {
        //Error if something went wrong with upload
        alert('Error uploading file')
      }
    }

    //Reset Click Function
    function resetFile() {
      //Checks for file if there is file, reset
      if (fileInput.value) {
        fileInput.value.value = ''
      }
    }

    return {
      file,
      fileInput,
      onUpload,
      uploadFile,
      resetFile,
    }
  },
})
</script>

<template>
    <div class="flex flex-col m-5">
      <div class="flex flex-row">
        <input class="w-1/2 border border-black rounded-sm" type="file" accept=".csv" ref="fileInput" @change="onUpload" />

      </div>
      <div class="flex flex-row space-x-2 my-2">
        <button class="border border-black rounded-sm px-2 drop-shadow-sm bg-slate-100" @click="resetFile">Reset</button>
        <button class="text-white border border-black rounded-sm px-2 drop-shadow-sm bg-sky-800" @click="uploadFile">Upload</button>
      </div>
    </div>
  </template>