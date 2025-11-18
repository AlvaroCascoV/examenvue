<template>
	<div>
		<h1>Historial de compras</h1>
		<table class="table table-striped">
			<thead class="table-primary">
				<tr>
					<th># Pedido</th>
					<th>ID Cubo</th>
					<th>Fecha del pedido</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="pedido in compras" :key="pedido">
					<td>{{ pedido.idPedido }}</td>
					<td>{{ pedido.idCubo }}</td>
					<td>{{ pedido.fechaPedido }}</td>
				</tr>
			</tbody>
		</table>
		<form>
			<button class="btn btn-danger" v-on:click.prevent="irPerfil()">
				Volver al perfil
			</button>
			<button class="btn btn-primary" v-on:click.prevent="irInsert()">
				Nuevo pedido
			</button>
		</form>
	</div>
</template>

<script>
	import Global from "@/Global";
	import ServiceCubos from "@/services/ServiceCubos";
	let service = new ServiceCubos();

	export default {
		name: "ComprasComponent",
		data() {
			return {
				compras: {},
			};
		},
		mounted() {
			if (Global.token === "") {
				this.$router.push("/login");
			} else {
				this.getCompras();
			}
		},
		methods: {
			getCompras() {
				service.getCompras().then((result) => {
					this.compras = result;
				});
			},
			irPerfil() {
				this.$router.push("/perfil");
			},
			irInsert() {
				this.$router.push("/insert");
			},
		},
	};
</script>

<style></style>
