<template>
	<div class="container">
		<div class="row justify-content-center align-items-top mt-5">
			<div class="col-md-6 col-lg-4">
				<div class="card shadow">
					<div class="card-body p-4">
						<h3 class="card-title text-center mb-4">Login</h3>
						<form v-on:submit.prevent="login()">
							<div class="mb-3">
								<label for="email" class="form-label">Email</label>
								<input
									type="text"
									class="form-control"
									id="email"
									name="email"
									placeholder="Email"
									required
									v-model="loginInfo.email"
								/>
							</div>
							<div class="mb-3">
								<label for="contrasena" class="form-label">Contraseña</label>
								<input
									type="password"
									class="form-control"
									id="contrasena"
									name="contrasena"
									placeholder="Contraseña"
									required
									v-model="loginInfo.password"
								/>
							</div>
							<div class="d-grid">
								<button type="submit" class="btn btn-primary">Login</button>
							</div>
						</form>
					</div>
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
		name: "LoginComponent",
		data() {
			return {
				loginInfo: {
					email: "",
					password: "",
				},
			};
		},
		methods: {
			login() {
				service.login(this.loginInfo).then((result) => {
					Global.token = result.response;
					console.log("Token: " + Global.token);
					this.$router.push("/perfil");
				});
			},
		},
	};
</script>

<style></style>
