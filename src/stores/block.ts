// import { Block } from "@/types/Block";
import { defineStore } from "pinia";
import { ref } from "vue";

interface Block {
  precent?: number;
  description?: string;
}

export const useBlockStore = defineStore('block', () => {
  const blocks = ref<Block[]>()

  function importBlock(listBlock: Block[]) {
    console.log('listBlock: ', listBlock);
    blocks.value = listBlock
  }
  
  return { blocks, importBlock }
});
