<template>
	<div>
		<div class="container mt-4">
			<h1 class="mb-4 text-primary">USUARIO</h1>
			<div class="card shadow-sm">
				<div class="card-header bg-primary text-white">
					<h2 class="h5 mb-0">Detalles del Perfil</h2>
				</div>
				<div class="card-body">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">
							<strong>ID Usuario:</strong>
							<span class="badge bg-secondary ms-2">
								{{ usuario.idUsuario }}
							</span>
						</li>
						<li class="list-group-item">
							<strong>Nombre:</strong>
							<span class="text-muted ms-2">{{ usuario.nombre }}</span>
						</li>
						<li class="list-group-item">
							<strong>Correo:</strong>
							<span class="text-muted ms-2">{{ usuario.email }}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Global from "@/Global";
	import ServiceCubos from "@/services/ServiceCubos";

	let service = new ServiceCubos();
	export default {
		name: "PerfilComponent",
		data() {
			return {
				usuario: {},
			};
		},
		mounted() {
			if (Global.token === "") {
				this.$router.push("/login");
			} else {
				this.getPerfil();
			}
		},
		methods: {
			getPerfil() {
				service.getUsuario().then((result) => {
					this.usuario = result;
				});
			},
		},
	};
</script>

<style></style>
