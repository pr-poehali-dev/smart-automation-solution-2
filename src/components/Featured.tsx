export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/6ea9fba0-8349-44ab-a820-c5f8789bc22c/files/d62b8969-ebd8-4e31-8af8-09c412b63ec0.jpg"
          alt="Businessman in modern office"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Качества настоящего бизнесмена</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Не просто владелец компании — стратег, лидер и визионер. Бизнесмен видит возможности там, где другие видят препятствия,
          и превращает идеи в результат.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Узнать больше
        </button>
      </div>
    </div>
  );
}