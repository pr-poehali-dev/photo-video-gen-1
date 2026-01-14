import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTab?: "login" | "register";
}

const AuthDialog = ({ open, onOpenChange, defaultTab = "login" }: AuthDialogProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    if (!loginEmail || !loginPassword) {
      setError("Пожалуйста, заполните все поля");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      localStorage.setItem("userEmail", loginEmail);
      localStorage.setItem("isAuthenticated", "true");
      setIsLoading(false);
      onOpenChange(false);
      alert("Успешный вход! 🎉");
    }, 500);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    if (!registerName || !registerEmail || !registerPassword) {
      setError("Пожалуйста, заполните все поля");
      setIsLoading(false);
      return;
    }

    if (registerPassword.length < 6) {
      setError("Пароль должен быть минимум 6 символов");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      localStorage.setItem("userName", registerName);
      localStorage.setItem("userEmail", registerEmail);
      localStorage.setItem("isAuthenticated", "true");
      setIsLoading(false);
      onOpenChange(false);
      alert(`Добро пожаловать, ${registerName}! 🚀`);
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Добро пожаловать в GenAI Studio
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ваш@email.ru"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-blue-600"
                disabled={isLoading}
              >
                {isLoading ? "Загрузка..." : "Войти"}
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Или войти через
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" type="button" onClick={() => alert("Google вход в разработке!")}>
                <Icon name="Chrome" className="mr-2" size={18} />
                Google
              </Button>
              <Button variant="outline" type="button" onClick={() => alert("GitHub вход в разработке!")}>
                <Icon name="Github" className="mr-2" size={18} />
                GitHub
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="register" className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Иван Иванов"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-register">Email</Label>
                <Input
                  id="email-register"
                  type="email"
                  placeholder="ваш@email.ru"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-register">Пароль</Label>
                <Input
                  id="password-register"
                  type="password"
                  placeholder="••••••••"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-blue-600"
                disabled={isLoading}
              >
                {isLoading ? "Загрузка..." : "Создать аккаунт"}
              </Button>
            </form>
            
            <p className="text-xs text-center text-muted-foreground">
              Регистрируясь, вы соглашаетесь с{" "}
              <a href="#" className="underline hover:text-primary">
                условиями использования
              </a>
            </p>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;