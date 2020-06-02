<template>
    <footer id="sticky-footer" class="py-4 bg-primary text-white-50">
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <div class="eee">
                        <small>&copy;IntexSoft, car-catalog UI</small>
                    </div>
                </div>
                <div class="col">
                        <a href="https://www.facebook.com/Intexsoft.Life" class="fa fa-facebook"></a>
                        <a href="https://twitter.com/intexsoft" class="fa fa-twitter"></a>
                        <a href="https://www.instagram.com/intexsoft_life" class="fa fa-instagram"></a>
                        <a href="https://ru.linkedin.com/organization-guest/company/intexsoft" class="fa fa-linkedin"></a>
                        <a href="https://vk.com/intexsoft_life" class="fa fa-vk"></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped>
.fa {
    padding-right: 30px;
    font-size: 20px;
    width: 10px;
    color: white;
    text-decoration: none;
}
.fa:hover {
    opacity: 0.7;
}
</style>