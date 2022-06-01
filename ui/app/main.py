import kivy
from kivy.uix.gridlayout import GridLayout
from kivy.uix.label import Label
from kivy.uix.textinput import TextInput
from kivy.app import App
class Login(GridLayout):
    def __init__(self,**kwargs):
        super(Login,self).__init__(**kwargs)
        self.cols =2
        self.add_widget(Label(text="User Name"))
        self.username = TextInput(multiline=False)
        self.add_widget(self.username)

class SwitchApp(App):
    def build(self):
        login = Login()
        return login

SwitchApp().run()