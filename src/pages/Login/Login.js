import './login.css';
function Login(){
return(
<div class="modal-dialog modal-dialog-centered login-modal" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form>
                <input type="text" placeholder="Email address or user name" class="form-control" />
                <br />
                <input type="password" placeholder="Password" class="form-control" />
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="button button-primary login-btn">Login</button>
            <a href="" alt="Forget password button" class="button-link">Forgot your password?</a>
            <hr class="separator" />
            <button type="button" class="button button-secondary register-btn">Create
                a new
                account</button>
        </div>
    </div>
</div>
);
}
export default Login;