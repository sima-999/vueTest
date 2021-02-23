<template>
    <div>
<input v-model="msg" debounce="5000"><br>
{{msg}}
<span v-for="(item,index) in TestObject" :key="index">
   {{index}}: {{item}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'假的数据',
            TestObject:{name:'lisi',age:14,render:'female'}
        }
    }
}
</script>
