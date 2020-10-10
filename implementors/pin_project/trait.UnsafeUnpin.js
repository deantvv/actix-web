(function() {var implementors = {};
implementors["actix_http"] = [{"text":"impl&lt;B&gt; UnsafeUnpin for ResponseBody&lt;B&gt;","synthetic":false,"types":[]},{"text":"impl UnsafeUnpin for Body","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Unpin, E&gt; UnsafeUnpin for BodyStream&lt;S, E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Unpin&gt; UnsafeUnpin for SizedStream&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;B&gt; UnsafeUnpin for Encoder&lt;B&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, S, B, X, U&gt; UnsafeUnpin for Dispatcher&lt;T, S, B, X, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;Request = Request&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Error: Into&lt;Error&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: MessageBody,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Service&lt;Request = Request, Response = Request&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::Error: Into&lt;Error&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Service&lt;Request = (Request, Framed&lt;T, Codec&gt;), Response = ()&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::Error: Display,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, B&gt; UnsafeUnpin for SendResponse&lt;T, B&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, S:&nbsp;Service&lt;Request = Request&gt;, B:&nbsp;MessageBody&gt; UnsafeUnpin for Dispatcher&lt;T, S, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsyncRead + AsyncWrite + Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, T&gt; UnsafeUnpin for Dispatcher&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;Request = Frame, Response = Message&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsyncRead + AsyncWrite,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()