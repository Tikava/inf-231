<template>
    <table>
        <thead>
            <tr>
                <th v-for="column in columns" :key="column">{{ column }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id">
                <td v-for="column in columns" :key="column">{{ item[column] }}</td>
            </tr>
        </tbody>
    </table>
</template>
  
<script>
export default {
    props: {
        data: {
            type: Array,
            required: true
        },
        columns: {
            type: Array,
            required: true
        }
    }
}
</script>
  