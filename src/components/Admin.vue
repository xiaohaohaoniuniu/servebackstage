<template>
	<div id="admin">
		<h4>添加种类</h4>
		<div class="row">
			<!-- 左边 -->
			<div>
				<label for="">名字</label>
				<input type="text" class="form-control" v-model="repairdata.repairName">
				<label for="">地址</label>
				<input type="text" class="form-control" v-model="repairdata.repairAddress">
				<label for="">功能</label>
				<input type="text" class="form-control" v-model="repairdata.repairAction">
				<label for="">距离</label>
				<input type="text" class="form-control" v-model="repairdata.repairDistance">
				<label for="">评论</label>
				<input type="text" class="form-control" v-model="repairdata.repairComment">
				<label for="">单数</label>
				<input type="text" class="form-control" v-model="repairdata.repairCount">
				<label for="">总评分</label>
				<input type="text" class="form-control" v-model="repairdata.repairAllGrade">
				<button v-on:click="addrepair" class="add-pizza btn btn-info form-control">添加</button>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		data(){
			return {
				repairdata:{}
			}
		},
		methods:{
			// 添加pizza
			addrepair(){
				var addrepairData = this.repairdata;
				if(!this.repairdata.repairName){
					alert("填写名字");
					return;
				}else if(!this.repairdata.repairAddress){
					alert("填写尺寸");
					return;
				}else if(!this.repairdata.repairAction){
					alert("填写价格");
					return;
				}else{
					axios.post('/repairList.json',addrepairData)
					.then(res=>{
						// 同步到vuex
						this.$store.commit('addrepair',addrepairData);
						this.$router.push('/');
						// 添加成功让文本框为空
						this.repairdata = {}

					})
					.catch(err=>{
						console.log('添加新食物出错了，哈哈哈哈')
					})
				}	
			}
		}
	}
</script>
<style scoped>
	button.add-pizza{
		margin-top: 20px;
	}
</style>